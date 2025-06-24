"use client";

import React, { useState } from 'react';

export default function OnboardingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    artistName: "",
    email: "",
    city: "",
    category: "musician",
    hourlyFee: "",
    portfolioUrl: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    alert("Submission successful! We've received your application and will review it shortly.");
    setFormData({
      fullName: "",
      artistName: "",
      email: "",
      city: "",
      category: "musician",
      hourlyFee: "",
      portfolioUrl: "",
      bio: "",
    });
  }

  const commonInputStyles = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
  const labelStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-8">
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="fullName" className={labelStyles}>Full Name</label>
              <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Priya Sharma" className={commonInputStyles} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="artistName" className={labelStyles}>Artist / Stage Name</label>
              <input id="artistName" name="artistName" value={formData.artistName} onChange={handleChange} placeholder="e.g. Art by Priya" className={commonInputStyles} required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelStyles}>Email Address</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={commonInputStyles} required />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="city" className={labelStyles}>City</label>
              <input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" className={commonInputStyles} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="category" className={labelStyles}>Primary Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} className={commonInputStyles}>
                <option value="musician">Musician</option>
                <option value="painter">Painter</option>
                <option value="photographer">Photographer</option>
                <option value="dancer">Dancer</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="hourlyFee" className={labelStyles}>Hourly Fee (₹)</label>
            <input id="hourlyFee" name="hourlyFee" type="number" value={formData.hourlyFee} onChange={handleChange} placeholder="e.g. 2500" className={commonInputStyles} required />
          </div>

          <div className="space-y-2">
            <label htmlFor="portfolioUrl" className={labelStyles}>Portfolio URL</label>
            <input id="portfolioUrl" name="portfolioUrl" type="url" value={formData.portfolioUrl} onChange={handleChange} placeholder="https://your-portfolio.com" className={commonInputStyles} required />
            <p className="text-sm text-muted-foreground">A link to your personal website, Behance, Dribbble, etc.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className={labelStyles}>Short Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us a little bit about yourself and your art."
              className={`${commonInputStyles} resize-y min-h-[120px]`}
              required
            />
            <p className="text-sm text-muted-foreground">This will appear on your public profile.</p>
          </div>
          
          <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
