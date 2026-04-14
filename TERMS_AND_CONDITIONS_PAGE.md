# Terms & Conditions Page

## Overview
Created a comprehensive, attractive Terms and Conditions page for Chitralekha Boutique Resort with expandable sections, smooth animations, and responsive design.

## File Structure
- **Page Component**: `src/app/terms-and-conditions/page.js`
- **Styles**: `src/styles/TermsAndConditions.module.css`
- **Route**: `/terms-and-conditions`

## Features

### 1. **Banner Section**
- Eye-catching header with gradient background
- Shimmer effect overlay for visual interest
- Breadcrumb navigation (HOME / TERMS & CONDITIONS)
- Animated title and subtitle with staggered delays
- Responsive height adjustment for mobile devices

### 2. **Introduction Section**
- Welcome message explaining the purpose of T&Cs
- Clear, professional text layout
- Fade-up animation on page load
- Maximum width container for readability

### 3. **Expandable Terms Sections**
10 comprehensive sections covering:
1. **Booking & Reservation Policy** - Booking procedures and confirmation
2. **Cancellation & Refund Policy** - Cancellation timelines and refund procedures
3. **Payment Terms & Conditions** - Payment methods and deposit requirements
4. **Guest Conduct & House Rules** - Property rules and guest responsibilities
5. **Health & Safety Requirements** - Health protocols and safety guidelines
6. **Liability & Disclaimer** - Resort liability limitations
7. **Privacy & Data Protection** - Data handling and privacy compliance
8. **Special Events & Functions** - Event booking policies
9. **Amendments & Modifications** - Terms update procedures
10. **Governing Law & Jurisdiction** - Legal jurisdiction and dispute resolution

### 4. **Interactive Accordion**
- Click to expand/collapse sections
- Smooth expand animation with `expandDown` keyframe
- Icon indicators (+ for closed, − for expanded)
- Hover effects on headers
- Color change on expanded state (green to gold)
- Staggered animations for each section

### 5. **Content Display**
- Checkmark bullets (✓) for each point
- Smooth hover effects with slide animation
- Clear typography hierarchy
- Proper spacing and readability

### 6. **Important Notice Section**
- Highlighted box with left border accent
- Contact information (email, phone, address)
- Gradient background for emphasis
- Slide-in animation on load

### 7. **Call-to-Action Section**
- Gradient background matching site theme
- Two buttons: "View Rooms" and "Contact Us"
- Shimmer effect on primary button hover
- Responsive button layout

### 8. **Footer Note**
- Last updated date and version
- Subtle styling with light background

## Animation Effects

### Keyframe Animations
- `fadeUp`: Fade in with upward movement
- `slideInLeft`: Slide in from left
- `slideInRight`: Slide in from right
- `shimmer`: Shimmer effect across elements
- `expandDown`: Smooth expand animation for accordion

### Hover Effects
- Term cards: Lift up with enhanced shadow
- Headers: Border color change and background gradient shift
- Icons: Scale up on hover
- Content items: Slide right with color change
- Buttons: Scale, lift, and shadow enhancement

## Color Scheme
- Primary Green: #465b3c
- Secondary Green: #5a6e4a
- Gold Accent: #b8860b
- Light Gold: #d4a017
- Background: #f8f9f5, #fff
- Text: #5a6e4a

## Responsive Design

### Desktop (900px+)
- Full-width layout
- 3-column friendly spacing
- Large banner (350px height)
- Full button width

### Tablet (600px - 900px)
- Adjusted padding and spacing
- Reduced banner height (250px)
- Flexible button layout
- Optimized font sizes

### Mobile (< 600px)
- Single column layout
- Compact banner (200px height)
- Stacked buttons
- Reduced padding and margins
- Optimized font sizes for readability
- Adjusted toggle icon positioning

## Interactive Features

### Accordion Functionality
```javascript
const [expandedId, setExpandedId] = useState(null);

const toggleSection = (id) => {
  setExpandedId(expandedId === id ? null : id);
};
```

- Only one section expanded at a time
- Smooth expand/collapse animation
- Visual feedback on interaction

## Content Structure

Each term section includes:
- **Icon**: Visual representation (emoji)
- **Title**: Clear section heading
- **Content**: 6-7 bullet points with detailed information
- **Checkmark bullets**: Visual indicators for each point

## Accessibility Features
- Semantic HTML structure
- Clear heading hierarchy
- Proper color contrast
- Readable font sizes
- Keyboard-friendly accordion (button elements)
- Descriptive link text

## Performance Optimizations
- CSS animations using transforms (no layout thrashing)
- Efficient state management for accordion
- Smooth 60fps animations
- Optimized media queries
- Minimal repaints with opacity and transform changes

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support
- CSS animations and transitions
- ES6+ JavaScript features

## Integration Points

### Navigation Links
- "View Rooms" → `/accommodation`
- "Contact Us" → `/contactUs`
- Breadcrumb "HOME" → `/`

### Contact Information
- Email: info@chitralekha.com
- Phone: +91 854 123 4567
- Address: Chitralekha Boutique Resort, Mussoorie, Uttarakhand, India

## Customization Options

### To Add More Sections
1. Add new object to `termsData` array
2. Include: `id`, `title`, `icon`, `content` array
3. Animations will apply automatically

### To Modify Colors
Update CSS variables in the stylesheet:
- Primary color: #465b3c
- Accent color: #b8860b
- Background: #f8f9f5

### To Change Content
Edit the `termsData` array in the component with your specific terms and conditions.

## SEO Considerations
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions can be added to layout
- Clear, descriptive content
- Structured data ready for schema markup

## Future Enhancements
- PDF download option for T&Cs
- Print-friendly version
- Multi-language support
- Search functionality within terms
- Version history tracking
- Digital signature acceptance
