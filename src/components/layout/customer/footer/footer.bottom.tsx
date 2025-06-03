const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm">
                    © {currentYear} CaterEase. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                    <span className="text-sm">⭐ Trusted by 1000+ clients</span>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        5.0 Rating
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom