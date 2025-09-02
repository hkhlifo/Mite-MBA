import React from "react";

export default function Faculty() {
    return (
        <section className="bg-gradient-to-b from-[#f8fafc] via-white to-indigo-50 py-16 text-[#1e293b]">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                    Meet Our<span className="bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text"> Faculty</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                    Our faculty team blends academic excellence with industry expertise, nurturing future business leaders with innovation and integrity.
                </p>
                <div className="bg-white rounded-xl p-6 shadow text-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-500 max-w-md mx-auto mb-12 cursor-pointer">
                    <img
                        src="https://mite.ac.in/wp-content/uploads/2025/07/MITE-Dr-Mahesh-M-MBA-Photo-1.jpg"
                        alt="Dr. Mahesh M. Vanjeri"
                        className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-sm"
                    />
                    <h3 className="text-lg font-semibold">Dr. Mahesh M. Vanjeri</h3>
                    <p className="text-sm text-indigo-600 font-medium">Professor & Head of Department (MBA)</p>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Core Faculty</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            name: "Dr. Shreekant G. Naik",
                            title: "Associate Professor",
                            photo: "https://mite.ac.in/wp-content/uploads/2023/12/Shreekant-G-Naik-e1743222431138.jpg",
                        },
                        {
                            name: "Ms. Kavya Rai",
                            title: "Assistant Professor",
                            photo: "https://mite.ac.in/wp-content/uploads/2025/03/MITE_MBA_DrJayashri.png",
                        },
                        {
                            name: "Ms. Noor",
                            title: "Assistant Professor",
                            photo: "https://mite.ac.in/wp-content/uploads/2023/12/Verina-e1743222940136.jpg",
                        },
                    ].map((person) => (
                        <div
                            key={person.name}
                            className="bg-white rounded-xl p-6 shadow text-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        >
                            <img
                                src={person.photo}
                                alt={person.name}
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-sm"
                            />
                            <h3 className="text-lg font-semibold">{person.name}</h3>
                            <p className="text-sm text-indigo-600 font-medium">{person.title}</p>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl font-semibold mb-6">Visiting Faculty</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Mr. Sandeep Shetty",
                            title: "Visiting Professor - Finance",
                            photo: "https://mite.ac.in/wp-content/uploads/2025/03/MITE_MBA_PRAVEEN_KAMATH.png",
                        },
                        {
                            name: "Ms. Sneha Bhat",
                            title: "Visiting Professor - HR",
                            photo: "https://mite.ac.in/wp-content/uploads/2025/04/MITE_MBA_Suchithra_II-1.png",
                        },
                        {
                            name: "Dr. Ajay Kumar",
                            title: "Visiting Professor - Marketing",
                            photo: "https://mite.ac.in/wp-content/uploads/2024/07/Raghu_21_Feb_2023-e1743222795300.jpg",
                        },
                    ].map((person) => (
                        <div
                            key={person.name}
                            className="bg-white rounded-xl p-6 shadow text-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        >
                            <img
                                src={person.photo}
                                alt={person.name}
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-sm"
                            />
                            <h3 className="text-lg font-semibold">{person.name}</h3>
                            <p className="text-sm text-indigo-600 font-medium">{person.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}