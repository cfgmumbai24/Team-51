import React from 'react';
// import './LandingPage.css';
import '../tailwind.css';



const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <header className="w-full text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to Gram Urja</h1>
                    <p className="mt-2 text-xl">Empowering Rural Education</p>
                </div>
            </header>
            <main className="container mx-auto px-6 py-12">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">About GramHunar Program</h2>
                    <p className="text-lg">
                        GramHunar is building a network of empowered educational leaders from the community to bring a transformational change in the rural education system. These fellows (leaders) are facing challenges with regular monthly and quarterly reporting. Currently, these reports are shared via WhatsApp and it takes one person's effort daily to collate this data.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Our Challenge</h2>
                    <p className="text-lg">
                        These reports include different classroom activities scheduled, and observations on a daily basis based on students' behavior. The organization is looking for a platform where all this data can be collated and displayed in one place. The platform should help save a lot of manual effort to go through individual WhatsApp groups and collate this data.
                    </p>
                </section>
                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Our Solution</h2>
                    <p className="text-lg mb-6">
                        We are developing a platform to streamline the reporting process, allowing for easy data collation and visualization, saving time and improving efficiency.
                    </p>
                    
                </section>
            </main>
            <footer className="w-full bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Gram Urja. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
