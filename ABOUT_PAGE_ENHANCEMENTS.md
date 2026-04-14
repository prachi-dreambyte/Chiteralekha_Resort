# About Page UI Enhancements

## Overview
Enhanced the AboutPage.js UI with attractive animations, hover effects, improved visual styling, and added a new Team Members section.

## Key Enhancements

### 1. **New Keyframe Animations**
- `float`: Smooth floating animation for elements
- `glow`: Glowing effect for highlights
- `shimmer`: Shimmer effect across elements
- `pulse`: Pulsing opacity animation
- `scaleIn`: Scale-in entrance animation

### 2. **Banner Section**
- Added floating background animation
- Shimmer effect overlay for visual interest
- Enhanced text animations with staggered delays
- Improved background image opacity and layering

### 3. **Feature Cards**
- Hover effect: Lift up with scale and shadow enhancement
- Shimmer effect on hover
- Icon animation: Float effect with scale and rotation on hover
- Title color change to gold (#b8860b) on hover
- Border highlight on hover
- Smooth cubic-bezier transitions for premium feel

### 4. **Mission & Vision Cards**
- Enhanced image hover: Scale and slight rotation
- Improved shadow effects on hover
- Title underline animation that expands on hover
- Smooth color transitions
- Better parallax image scaling

### 5. **Video Button**
- Shimmer effect on hover
- Scale and lift animation
- Enhanced shadow glow
- Smooth cubic-bezier easing

### 6. **Owner Section**
- Image hover: Scale and lift with enhanced shadow
- Quote card: Shimmer effect with color transitions
- Quote icon: Scale and opacity animation on hover
- Quote text color change to gold on hover
- Border color animation on hover
- Smooth transitions throughout

### 7. **Gallery Cards**
- Enhanced hover: Lift, scale, and rotate
- Image zoom with rotation effect
- Title slide-up animation on overlay
- Improved shadow effects

### 8. **Highlight Cards**
- Content slide animation on hover
- Title underline animation (expands on hover)
- Image lift and shadow enhancement
- Color transitions for text
- Smooth staggered animations

## Animation Techniques Used

1. **Cubic-Bezier Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy, premium feel
2. **Shimmer Effects**: Linear gradient animations for shine effects
3. **Transform Combinations**: Scale, rotate, and translate for dynamic effects
4. **Staggered Animations**: Delayed animations for sequential appearance
5. **Hover State Transitions**: Smooth color and transform changes
6. **Shadow Enhancements**: Progressive shadow growth on hover

## Color Scheme
- Primary Green: #465b3c
- Secondary Green: #5a6e4a
- Gold Accent: #b8860b
- Light Gold: #d4a017
- Background: #f8f9f5, #fff

## Browser Compatibility
All animations use standard CSS3 properties with smooth transitions and transforms for optimal performance across modern browsers.

## Performance Considerations
- Used `will-change` for optimized animations
- Efficient transform-based animations (no layout thrashing)
- Smooth 60fps animations with cubic-bezier easing
- Minimal repaints with opacity and transform changes

## New Team Members Section

### Features:
- **Team Grid Layout**: Responsive grid displaying team member cards
- **Card Animations**: Staggered fade-up animations with hover lift effect
- **Image Effects**: 
  - Zoom and scale on hover
  - Gradient overlay that appears on hover
  - Enhanced shadow effects
- **Social Icons**: 
  - Facebook, Twitter, Instagram, LinkedIn links
  - Hover effects with scale, rotation, and color change
  - Smooth transitions with gold accent color
- **Text Animations**:
  - Name and role color transitions to gold on hover
  - Social icons slide-up animation on card hover
  - Smooth staggered animations for each team member

### Team Members Data:
- Rajesh Kumar - Founder & Owner
- Priya Sharma - General Manager
- Amit Patel - Operations Manager
- Neha Verma - Guest Relations Officer
- Vikram Singh - Chef & Culinary Director
- Anjali Desai - Wellness & Spa Manager

### Responsive Design:
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column layout with adjusted image heights and font sizes

### Animation Details:
- Card hover: Lift up 15px with enhanced shadow
- Image hover: Scale 1.1x with smooth cubic-bezier easing
- Social icons: Appear on card hover with slide-up animation
- Icon hover: Scale 1.15x with 5deg rotation and gold background
