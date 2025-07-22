# Eyecons

A React icon library distributed as individual components, built with TypeScript.

## Installation

```bash
npm install eyecons
# or
yarn add eyecons
```

## Usage

```jsx
import { 
  Home, 
  Search, 
  Settings, 
  Bell, 
  User, 
  Download, 
  ArrowRight,
  Check,
  Star 
} from 'eyecons';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Search size={32} />
      <Settings size={16} color="#ff0000" />
      <Bell size={20} color="red" />
      <User size={18} />
      <Download size={24} color="green" />
      <ArrowRight size={16} />
      <Check size={24} color="green" />
      <Star size={32} color="gold" />
    </div>
  );
}
```

## Available Icons

This library includes **458 comprehensive icons** covering:

### Categories
- **Navigation & Arrows**: Home, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, etc.
- **UI Controls**: Button, Checkbox, Radiobutton, Slider, Switch, etc.
- **Communication**: Bell, Message, Envelope, Phone, etc.  
- **Files & Folders**: File, Folder, Upload, Download, Save, etc.
- **Social & Branding**: GitHub, Twitter, Facebook, Instagram, Discord, etc.
- **Layout & Design**: Grid, Columns, Rows, Align, Border, etc.
- **Typography**: FontBold, FontItalic, TextAlign, LetterSpacing, etc.
- **Media & Graphics**: Image, Video, Camera, Play, Pause, etc.
- **System & Tools**: Gear, Settings, Search, Filter, etc.
- **And many more categories!**

### Example Icons
`Accessibility`, `ActivityLog`, `AlarmClock`, `Archive`, `Avatar`, `Badge`, `BarChart`, `Bell`, `Bookmark`, `Calendar`, `Camera`, `Check`, `Clock`, `Cloud`, `Code`, `Copy`, `Dashboard`, `Download`, `Edit`, `Exit`, `Face`, `File`, `Gear`, `Globe`, `Grid`, `Home`, `Image`, `Info`, `Link`, `Location`, `Lock`, `MagnifyingGlass`, `Moon`, `Notification`, `Pause`, `Person`, `Play`, `Plus`, `Rocket`, `Save`, `Search`, `Settings`, `Share`, `Star`, `Sun`, `Table`, `Tag`, `Trash`, `Upload`, `User`, `Video`, `ZoomIn`, `ZoomOut`, and 400+ more...

## Props

All icons accept the following props:

- `size`: number | string (default: 24) - Sets width and height
- `color`: string (default: 'currentColor') - Sets the stroke color
- All standard SVG props are also supported

## Development

```bash
# Install dependencies
yarn install

# Build the library
yarn build

# Watch for changes during development
yarn dev
```

## License

MIT © Ruby Childs
