

const ContactForm = () => {
    return (
        <div className="bg-white p-8 rounded-sm shadow-sm">
            <form action="">
                <div className="grid md:grid-cols-2 gap-7 mt-6">
                    <div>
                        <input type="text" name="name" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Name*" />
                        <div aria-live="polite" aria-atomic="true">
                            <p className="text-sm text-red-500 mt-2">message</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm