export interface Post {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Mastering Web Development",
        description: "Discover the latest techniques and best practices for building modern, responsive websites with cutting-edge technologies.",
        image: "/images/post1.png",
        category: "Web Development",
        date: "Feb 4, 2026",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Design Trends 2026",
        description: "Explore the hottest design trends shaping the digital landscape this year, from bold gradients to immersive experiences.",
        image: "/images/post2.png",
        category: "Design",
        date: "Feb 3, 2026",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "AI and Machine Learning",
        description: "Dive into the fascinating world of artificial intelligence and learn how machine learning is transforming industries.",
        image: "/images/post3.png",
        category: "Technology",
        date: "Feb 2, 2026",
        readTime: "7 min read"
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Learn the fundamentals of creating stunning mobile applications that deliver exceptional user experiences on any device.",
        image: "/images/post4.png",
        category: "Mobile",
        date: "Feb 1, 2026",
        readTime: "6 min read"
    },
    {
        id: 5,
        title: "Cloud Computing and DevOps",
        description: "Master the art of cloud infrastructure and DevOps practices to deploy scalable, reliable applications with confidence.",
        image: "/images/post5.png",
        category: "Cloud",
        date: "Jan 31, 2026",
        readTime: "8 min read"
    }
];
