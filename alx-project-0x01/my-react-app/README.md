# My React App

This is a simple React application structured with components and pages to demonstrate the use of functional components in TypeScript.

## Project Structure

```
my-react-app
├── components
│   ├── common
│   │   ├── Button.tsx
│   │   └── PostCard.tsx
│   └── layout
│       ├── Footer.tsx
│       └── Header.tsx
├── pages
│   ├── posts
│   │   └── index.tsx
│   └── users
│       └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Components

- **Button**: A reusable button component that handles click events and displays text.
- **PostCard**: A component for displaying individual post details, including title, content, and an optional image.
- **Header**: The top navigation bar of the application, including branding and links.
- **Footer**: Displays copyright information and additional links at the bottom of the application.

## Pages

- **Posts Page**: Displays a list of posts using the PostCard component.
- **Users Page**: Displays user-related information.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.

## License

This project is licensed under the MIT License.