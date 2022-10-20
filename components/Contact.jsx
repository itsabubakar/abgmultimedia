import { MdOutlineMarkEmailRead } from 'react-icons/md'
const Contact = () => {
    return (
        <div className="bg-black text-white">
            <h2 className='text-3xl px-5 md:px-20 py-10'>Contact us</h2>
            <p className='px-5 md:px-20 mb-10'>We will get back to you within 24 hours. We’re happy to sign an NDA if requested. </p>
            <div class="flex flex-col-reverse md:flex-row items-center justify-center md:p-12">
                {/* Form */}
                <div class="mx-auto w-3/4 max-w-[550px]">
                    <form action="#" method="POST">
                        <div class="mb-5">
                            <label
                                htmlFor="name"
                                class="mb-3 block text-base font-medium"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="w-full border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                htmlFor="email"
                                class="mb-3 block text-base font-medium"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                class="w-full border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                htmlFor="subject"
                                class="mb-3 block text-base font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                class="w-full border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                htmlFor="message"
                                class="mb-3 block text-base font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                class="w-full resize-none border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                class="bg-white px-8 py-3 text-black text-lg font-medium border hover:border hover:border-white hover:bg-black hover:text-white transition ease-in-out"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                {/* Icon */}
                <div className='
                md:w-1/4 mb-5'><MdOutlineMarkEmailRead size={100} /></div>

            </div>
        </div>
    )
}

export default Contact