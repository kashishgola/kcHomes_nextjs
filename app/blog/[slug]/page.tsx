// import { blogPosts } from "@/lib/blogData";
// import Image from "next/image";
// import Link from "next/link";

// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // ✅ unwrap params
//   const { id } = await params;

//   const blog = blogPosts.find((post) => post.id === Number(id));

//   if (!blog) {
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-bold">Blog not found</h2>
//         <Link href="/blog" className="text-orange-500 mt-4 inline-block">
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts
//     .filter((post) => post.id !== blog.id)
//     .slice(0, 5);

//   return (
//     <main>
//       {/* 🔥 HERO */}
//       <section className="relative h-[300px] w-full">
//         <Image src={blog.img} alt={blog.title} fill className="object-cover" />
//         <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//           <span className="bg-orange-500 px-3 py-1 text-xs rounded-full mb-3">
//             {blog.category}
//           </span>

//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl">
//             {blog.title}
//           </h1>

//           <div className="flex gap-3 mt-3 text-sm text-gray-200">
//             <span>{blog.date}</span>
//             <span>•</span>
//             <span>{blog.readTime}</span>
//           </div>
//         </div>
//       </section>

//       {/* 🔥 MAIN CONTENT */}
//       <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-2">
//             {/* IMAGE */}
//             <div className="mb-4 flex justify-center items-center">
//               <Image
//                 src={blog.img}
//                 alt={blog.title}
//                 width={1000}
//                 height={400}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* INTRO */}
//             <p className="text-lg text-gray-700 leading-relaxed">
//               {blog.excerpt}
//             </p>

// if (block.type === "table") {
//   return (
//     <table key={index} className="w-full border mt-4">
//       <thead>
//         <tr>
//           {block.headers.map((h, i) => (
//             <th key={i} className="border px-3 py-2 bg-gray-100">
//               {h}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {block.rows.map((row, i) => (
//           <tr key={i}>
//             {row.map((cell, j) => (
//               <td key={j} className="border px-3 py-2">
//                 {cell}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

//             <div className="mt-6 space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
//               {blog.content.map((block, index) => {
//                 if (block.type === "paragraph") {
//                   return <p key={index}>{block.text}</p>;
//                 }

//                 if (block.type === "heading") {
//                   return (
//                     <h3
//                       key={index}
//                       className="text-xl font-semibold text-black mt-6"
//                     >
//                       {block.text}
//                     </h3>
//                   );
//                 }

//                 if (block.type === "list") {
//                   return (
//                     <ul key={index} className="list-disc pl-5 space-y-2">
//                       {block.items.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   );
//                 }

//                 return null;
//               })}
//             </div>


//             <div className="mt-12">
//   <h3 className="text-xl font-semibold mb-5">FAQs</h3>

//   <div className="space-y-4">
//     {blog.faqs.map((faq, i) => (
//       <div key={i}>
//         <h4 className="font-semibold">{faq.question}</h4>
//         <p className="text-gray-600">{faq.answer}</p>
//       </div>
//     ))}
//   </div>
// </div>
//           </div>

//           {/* 🔥 RIGHT SIDEBAR */}
//           <div className="lg:sticky lg:top-24 self-start">
//             <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>

//             <div className="space-y-5">
//               {relatedPosts.map((post) => (
//                 <Link
//                   key={post.id}
//                   href={`/blog/${post.id}`}
//                   className="flex gap-3 group"
//                 >
//                   <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
//                     <Image
//                       src={post.img}
//                       alt={post.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">{post.date}</p>

//                     <h4 className="text-sm font-medium group-hover:text-orange-500 transition line-clamp-2">
//                       {post.title}
//                     </h4>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔥 BACK */}
//       <div className="text-center pb-16">
//         <Link
//           href="/blog"
//           className="text-sm text-gray-500 hover:text-orange-500"
//         >
//           ← Back to all blogs
//         </Link>
//       </div>
//     </main>
//   );
// }



// import { blogPosts } from "@/lib/blogData";
// import Image from "next/image";
// import Link from "next/link";

// // ✅ SEO
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const blog = blogPosts.find((p) => p.slug === slug);

//   return {
//     title: blog?.metaTitle,
//     description: blog?.metaDescription,
//   };
// }

// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // ✅ IMPORTANT FIX
//   const { slug } = await params;

//   const blog = blogPosts.find((post) => post.slug === slug);

//   if (!blog) {
//     return <div className="text-center py-20">Blog not found</div>;
//   }

//   const relatedPosts = blogPosts
//     .filter((post) => post.slug !== blog.slug)
//     .slice(0, 5);

//   return (
//     <main>
//       {/* HERO */}
//       <section className="relative h-[300px] w-full">
//         <Image src={blog.img} alt={blog.title} fill className="object-cover" />
//       </section>

//       {/* CONTENT */}
//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold">{blog.title}</h1>

//         <div className="mt-6 space-y-5">
//           {blog.content.map((block, index) => {
//             if (block.type === "paragraph") {
//               return <p key={index}>{block.text}</p>;
//             }

//             if (block.type === "heading") {
//               return <h3 key={index}>{block.text}</h3>;
//             }

//             if (block.type === "list") {
//               return (
//                 <ul key={index}>
//                   {block.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               );
//             }

//             if (block.type === "table") {
//               return (
//                 <table key={index} className="w-full border">
//                   <tbody>
//                     {block.rows.map((row, i) => (
//                       <tr key={i}>
//                         {row.map((cell, j) => (
//                           <td key={j} className="border p-2">
//                             {cell}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               );
//             }

//             return null;
//           })}
//         </div>

//         {/* FAQ */}
//         <div className="mt-10">
//           {blog.faqs.map((faq, i) => (
//             <div key={i}>
//               <h4>{faq.question}</h4>
//               <p>{faq.answer}</p>
//             </div>
//           ))}
//         </div>

//         {/* RELATED */}
//         <div className="mt-10">
//           <h3>Recent Posts</h3>
//           {relatedPosts.map((post) => (
//             <Link key={post.slug} href={`/blog/${post.slug}`}>
//               {post.title}
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


// import { blogPosts } from "@/lib/blogData";
// import Image from "next/image";
// import Link from "next/link";

// // ✅ SEO
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const blog = blogPosts.find((p) => p.slug === slug);

//   return {
//     title: blog?.metaTitle,
//     description: blog?.metaDescription,
//   };
// }

// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // ✅ unwrap params (Next.js 15 style)
//   const { slug } = await params;

//   const blog = blogPosts.find((post) => post.slug === slug);

//   if (!blog) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">Blog not found</h2>
//         <Link href="/blog" className="text-orange-500 mt-4 inline-block">
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts
//     .filter((post) => post.slug !== blog.slug)
//     .slice(0, 5);

//   return (
//     <main>
//       {/* HERO */}
//       <section className="relative h-[300px] w-full">
//         <Image src={blog.img} alt={blog.title} fill className="object-cover" />
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="absolute bottom-6 left-6 text-white">
//           <h1 className="text-3xl font-bold">{blog.title}</h1>
//         </div>
//       </section>

//       {/* ✅ MAIN LAYOUT */}
//       <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
//           {/* ================= LEFT CONTENT ================= */}
//           <div className="lg:col-span-2">
            
//             {/* EXCERPT */}
//             <p className="text-lg text-gray-700 mb-6">
//               {blog.excerpt}
//             </p>

//             {/* CONTENT */}
//             <div className="space-y-5 text-gray-700 leading-relaxed">
//               {blog.content.map((block, index) => {
//                 if (block.type === "paragraph") {
//                   return <p key={index}>{block.text}</p>;
//                 }

//                 if (block.type === "heading") {
//                   return (
//                     <h3
//                       key={index}
//                       className="text-xl font-semibold text-black mt-6"
//                     >
//                       {block.text}
//                     </h3>
//                   );
//                 }

//                 if (block.type === "list") {
//                   return (
//                     <ul key={index} className="list-disc pl-5 space-y-2">
//                       {block.items.map((item: string, i: number) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   );
//                 }

//                 if (block.type === "table") {
//                   return (
//                     <div key={index} className="overflow-x-auto">
//                       <table className="w-full border mt-4 text-sm">
//                         <tbody>
//                           {block.rows.map((row: string[], i: number) => (
//                             <tr key={i}>
//                               {row.map((cell: string, j: number) => (
//                                 <td key={j} className="border p-2">
//                                   {cell}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   );
//                 }

//                 return null;
//               })}
//             </div>

//             {/* FAQ */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-semibold mb-5">FAQs</h3>

//               <div className="space-y-4">
//                 {blog.faqs.map((faq: any, i: number) => (
//                   <div key={i}>
//                     <h4 className="font-semibold">{faq.question}</h4>
//                     <p className="text-gray-600">{faq.answer}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT SIDEBAR ================= */}
//           <div className="lg:sticky lg:top-24 self-start">
//             <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>

//             <div className="space-y-5">
//               {relatedPosts.map((post) => (
//                 <Link
//                   key={post.slug}
//                   href={`/blog/${post.slug}`}
//                   className="flex gap-3 group"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
//                     <Image
//                       src={post.img}
//                       alt={post.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition"
//                     />
//                   </div>

//                   {/* TEXT */}
//                   <div>
//                     <p className="text-xs text-gray-500">{post.date}</p>
//                     <h4 className="text-sm font-medium group-hover:text-orange-500 line-clamp-2">
//                       {post.title}
//                     </h4>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// import { blogPosts } from "@/lib/blogData";
// import Image from "next/image";
// import Link from "next/link";

// /* ================= TYPES ================= */

// type Params = {
//   slug: string;
// };

// type FAQ = {
//   question: string;
//   answer: string;
// };

// type ContentBlock =
//   | { type: "paragraph"; text: string }
//   | { type: "heading"; text: string }
//   | { type: "list"; items: string[] }
//   | {
//       type: "table";
//       headers?: string[];
//       rows: string[][];
//     };

// type BlogPost = {
//   slug: string;
//   title: string;
//   excerpt: string;
//   img: string;
//   date: string;
//   readTime?: string;
//   metaTitle?: string;
//   metaDescription?: string;
//   content: ContentBlock[];
//   faqs: FAQ[];
// };

// /* ================= SEO ================= */

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }) {
//   const { slug } = await params;

//   const blog = blogPosts.find((p: BlogPost) => p.slug === slug);

//   return {
//     title: blog?.metaTitle,
//     description: blog?.metaDescription,
//   };
// }

// /* ================= PAGE ================= */

// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<Params>;
// }) {
//   const { slug } = await params;

//   const blog = blogPosts.find((post: BlogPost) => post.slug === slug);

//   if (!blog) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">Blog not found</h2>
//         <Link href="/blog" className="text-orange-500 mt-4 inline-block">
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts
//     .filter((post: BlogPost) => post.slug !== blog.slug)
//     .slice(0, 5);

//   return (
//     <main>
//       {/* ================= HERO ================= */}
//       <section className="relative h-[300px] w-full">
//         <Image
//           src={blog.img}
//           alt={blog.title}
//           fill
//           className="object-cover"
//         />

//         {/* overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* CENTERED TITLE (FIXED) */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
//             {blog.title}
//           </h1>

//           <p className="text-sm mt-2 text-gray-200">
//             {blog.date} {blog.readTime ? `• ${blog.readTime}` : ""}
//           </p>
//         </div>
//       </section>

//       {/* ================= MAIN LAYOUT ================= */}
//       <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-2">
//             <p className="text-lg text-gray-700 mb-6">
//               {blog.excerpt}
//             </p>

//             <div className="space-y-5 text-gray-700 leading-relaxed">
//               {blog.content.map((block, index) => {
//                 if (block.type === "paragraph") {
//                   return <p key={index}>{block.text}</p>;
//                 }

//                 if (block.type === "heading") {
//                   return (
//                     <h3
//                       key={index}
//                       className="text-xl font-semibold text-black mt-6"
//                     >
//                       {block.text}
//                     </h3>
//                   );
//                 }

//                 if (block.type === "list") {
//                   return (
//                     <ul key={index} className="list-disc pl-5 space-y-2">
//                       {block.items.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   );
//                 }

//                 if (block.type === "table") {
//                   return (
//                     <div key={index} className="overflow-x-auto">
//                       <table className="w-full border mt-4 text-sm">
//                         <tbody>
//                           {block.rows.map((row, i) => (
//                             <tr key={i}>
//                               {row.map((cell, j) => (
//                                 <td key={j} className="border p-2">
//                                   {cell}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   );
//                 }

//                 return null;
//               })}
//             </div>

//             {/* FAQ */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-semibold mb-5">FAQs</h3>

//               <div className="space-y-4">
//                 {blog.faqs.map((faq, i) => (
//                   <div key={i}>
//                     <h4 className="font-semibold">{faq.question}</h4>
//                     <p className="text-gray-600">{faq.answer}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="lg:sticky lg:top-24 self-start">
//             <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>

//             <div className="space-y-5">
//               {relatedPosts.map((post: BlogPost) => (
//                 <Link
//                   key={post.slug}
//                   href={`/blog/${post.slug}`}
//                   className="flex gap-3 group"
//                 >
//                   <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
//                     <Image
//                       src={post.img}
//                       alt={post.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition"
//                     />
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">{post.date}</p>
//                     <h4 className="text-sm font-medium group-hover:text-orange-500 line-clamp-2">
//                       {post.title}
//                     </h4>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



import { blogPosts } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */

type Params = {
  slug: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "table";
      headers?: string[];
      rows: string[][];
    };

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  date: string;
  readTime?: string;
  metaTitle?: string;
  metaDescription?: string;
  content: ContentBlock[];
  faqs: FAQ[];
};

/* ================= STATIC PARAMS ================= */

export function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

/* ================= SEO ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const blog = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
  };
}

/* ================= PAGE ================= */

export default async function BlogDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const blog = blogPosts.find((post: BlogPost) => post.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link href="/blog" className="text-orange-500 mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((post: BlogPost) => post.slug !== blog.slug)
    .slice(0, 5);

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[300px] w-full">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
            {blog.title}
          </h1>

          <p className="text-sm mt-2 text-gray-200">
            {blog.date} {blog.readTime ? `• ${blog.readTime}` : ""}
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6">
              {blog.excerpt}
            </p>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              {blog.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={index}>{block.text}</p>;
                }

                if (block.type === "heading") {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6">
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="list-disc pl-5 space-y-2">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "table") {
                  return (
                    <div key={index} className="overflow-x-auto">
                      <table className="w-full border mt-4 text-sm">
                        <tbody>
                          {block.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className="border p-2">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-5">FAQs</h3>

              <div className="space-y-4">
                {blog.faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-semibold">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-24 self-start">
            <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>

            <div className="space-y-5">
              {relatedPosts.map((post: BlogPost) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 group"
                >
                  <div className="relative w-20 h-20 overflow-hidden rounded">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                    <h4 className="text-sm font-medium group-hover:text-orange-500 line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}