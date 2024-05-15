

const Testimonials = () => {
    return (
       <div className="font-playfair">
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 data-aos="fade-up" data-aos-duration="1200" className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500 ">peoples</span> say
        </h1>

        <p data-aos="fade-up" data-aos-duration="1200" className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Embark on an immersive journey into the vibrant world of Humanity and discover the profound impact of volunteering through the heartfelt reflections of our dedicated volunteers
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-3">
            <div data-aos="fade-up" data-aos-duration="1200" className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Volunteering with Humanity has been a profound experience, shaping not only the lives of those we serve but also my own perspective on compassion and altruism. The organization's unwavering commitment to positive change resonates deeply within me.”
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""></img>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1200" className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Humanity is more than just an organization; it's a vibrant community fueled by empathy and solidarity. Here, I've found not only a platform to make a difference but also a network of like-hearted individuals who have become my second family.”
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""></img>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                        <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1200" className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Every moment spent with Humanity is a testament to the power of collective action and empathy. From rebuilding communities after natural disasters to advocating for marginalized groups, our impact reverberates far beyond the boundaries of our projects.”
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                        <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
       </div>
    );
};

export default Testimonials;