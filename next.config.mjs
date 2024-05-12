import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
