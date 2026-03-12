import PageBanner from '../components/PageBanner';
import FAQ from '../components/FAQ';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Manufacturing: Industry 4.0 and Beyond",
      excerpt: "Explore how Industry 4.0 technologies are revolutionizing manufacturing processes and what lies ahead with Industry 5.0. Learn about the integration of IoT, AI, and automation in modern factories.",
      content: "Industry 4.0 represents a paradigm shift in manufacturing, integrating cyber-physical systems, IoT, and artificial intelligence to create smart factories. This transformation enables real-time monitoring, predictive maintenance, and data-driven decision making. Companies implementing Industry 4.0 solutions report efficiency gains of 20-30% and significant cost reductions. The journey toward Industry 5.0 emphasizes human-machine collaboration, sustainability, and personalized production. Organizations must invest in employee training, infrastructure upgrades, and strategic partnerships to successfully navigate this digital transformation.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      category: "Industry 4.0"
    },
    {
      id: 2,
      title: "Artificial Intelligence in Manufacturing: Applications and Benefits",
      excerpt: "Discover practical applications of AI in manufacturing, from predictive maintenance to quality control. Understand how machine learning algorithms are optimizing production processes.",
      content: "Artificial Intelligence is transforming manufacturing through predictive maintenance, quality inspection, demand forecasting, and process optimization. Machine learning algorithms analyze vast amounts of production data to identify patterns, predict equipment failures, and optimize parameters. Computer vision systems perform real-time quality inspection with accuracy exceeding human capabilities. AI-powered scheduling systems optimize production workflows, reducing lead times and inventory costs. The implementation of AI in manufacturing requires careful planning, data infrastructure development, and workforce training to maximize benefits and ensure successful adoption.",
      author: "Prof. Meera Patel",
      date: "2024-01-08",
      category: "Artificial Intelligence"
    },
    {
      id: 3,
      title: "IoT Implementation Guide for Small Manufacturing Units",
      excerpt: "Step-by-step guide for implementing IoT solutions in small and medium manufacturing enterprises. Learn about cost-effective approaches and practical considerations.",
      content: "Internet of Things implementation in small manufacturing units requires a strategic approach focusing on high-impact, cost-effective solutions. Start with equipment monitoring using wireless sensors to collect machine data, energy consumption, and environmental parameters. Implement edge computing for real-time data processing and cloud connectivity for remote monitoring. Focus on solving specific problems like reducing downtime, improving energy efficiency, or enhancing quality control. Choose scalable platforms that can grow with your business. Consider security implications and ensure proper data protection measures. Training employees and establishing data-driven decision-making processes are crucial for successful IoT adoption.",
      author: "Eng. Anil Sharma",
      date: "2024-01-01",
      category: "IoT Technology"
    },
    {
      id: 4,
      title: "Robotics Revolution: Collaborative Robots in Modern Factories",
      excerpt: "Explore the rise of collaborative robots (cobots) and their impact on manufacturing productivity. Learn about safety features, applications, and implementation strategies.",
      content: "Collaborative robots (cobots) are revolutionizing manufacturing by working safely alongside human operators without traditional safety barriers. Unlike industrial robots, cobots are designed with advanced safety features including force limiting, speed monitoring, and collision detection. They excel in assembly, packaging, machine tending, and quality inspection applications. Cobots offer flexibility, easy programming, and quick deployment compared to traditional automation. Implementation success requires proper risk assessment, operator training, and application analysis. The global cobot market is growing rapidly as manufacturers recognize benefits including improved productivity, consistency, and worker safety while maintaining human oversight and decision-making capabilities.",
      author: "Dr. Priya Singh",
      date: "2023-12-20",
      category: "Robotics"
    },
    {
      id: 5,
      title: "Cybersecurity in Industrial Automation: Protecting Critical Systems",
      excerpt: "Understanding cybersecurity challenges in industrial environments and implementing robust protection strategies for automation systems and manufacturing infrastructure.",
      content: "Industrial cybersecurity has become critical as manufacturing systems become increasingly connected and digitized. Traditional IT security approaches are insufficient for operational technology (OT) environments that prioritize availability and real-time performance. Industrial systems face unique threats including targeted attacks on SCADA systems, malware designed for industrial control systems, and insider threats. Implementing defense-in-depth strategies involving network segmentation, industrial firewalls, secure remote access, and regular security assessments is essential. Employee training, incident response planning, and compliance with standards like IEC 62443 ensure comprehensive protection. Organizations must balance security measures with operational requirements to maintain both cybersecurity and production efficiency.",
      author: "Cybersecurity Expert Team",
      date: "2023-12-15",
      category: "Cybersecurity"
    }
  ];

  const blogFAQs = [
    {
      question: "How often do you publish new blog content?",
      answer: "We publish new blog posts weekly, covering various aspects of Industry 4.0, automation technologies, case studies, and industry trends. Our content is created by industry experts and covers both technical and strategic aspects of manufacturing transformation."
    },
    {
      question: "Can I contribute articles or guest posts to your blog?",
      answer: "Yes, we welcome contributions from industry professionals, researchers, and experts. Please contact us with your article proposal, including a brief outline and your credentials. We review all submissions for quality, relevance, and technical accuracy."
    },
    {
      question: "Do you provide downloadable resources along with blog posts?",
      answer: "Many of our blog posts include downloadable resources such as white papers, implementation guides, checklists, and case study details. These resources provide additional depth and practical tools for implementing the concepts discussed in our articles."
    },
    {
      question: "How can I stay updated with your latest blog posts?",
      answer: "You can subscribe to our newsletter, follow us on social media platforms, or visit our blog section regularly. We also send periodic industry updates and exclusive content to our subscribers covering the latest trends and technologies."
    },
    {
      question: "Are your blog posts suitable for both technical and non-technical readers?",
      answer: "We create content for various audiences, from technical professionals to business leaders. Each post is clearly categorized and indicates the intended audience level. We strive to make complex topics accessible while maintaining technical accuracy."
    },
    {
      question: "Can I request specific topics to be covered in future blog posts?",
      answer: "Absolutely! We encourage readers to suggest topics they'd like us to cover. You can submit topic requests through our contact form or social media channels. We prioritize topics based on relevance, reader interest, and industry trends."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Blog"
        subtitle="Industry Insights & Expert Knowledge"
        description="Stay updated with the latest trends, technologies, and insights in Industry 4.0 and manufacturing automation"
      />

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Expert insights on Industry 4.0, automation, and manufacturing technologies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mr-4">
                      {blogPosts[0].category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    
                    <button className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-xs">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <button className="text-green-600 hover:text-green-800 font-medium flex items-center text-sm transition-colors">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Categories</h2>
            <p className="text-lg text-gray-600">Explore content by technology and application areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Industry 4.0', 'Artificial Intelligence', 'IoT Technology', 'Robotics', 'Cybersecurity', 'Automation'].map((category) => (
              <div key={category} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-gray-900 text-sm">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Blog FAQs" faqs={blogFAQs} />
    </div>
  );
};

export default Blog;