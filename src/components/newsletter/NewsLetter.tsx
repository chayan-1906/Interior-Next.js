function NewsLetter() {
    return (
        <div className={'max-w-[500px] mx-auto space-y-5 py-14'}>
            <h1 className={'text-3xl font-bold font-serif text-center'}>Subscribe to our Newsletter</h1>
            <p className={'max-w-[300px] mx-auto text-gray-500 text-sm text-center'}>
                Stay inspired with the latest interior design trends, tips, and exclusive offers! Subscribe to our newsletter for expert insights, stunning decor ideas, and fresh inspirations
                delivered straight to your inbox. Transform your space—one email at a time!
            </p>

            {/** form */}
            <div className={'flex !mt-10 justify-center'}>
                <input type={'email'} placeholder={'Enter your email...'} className={'px-4 py-4 ring-1 ring-gray-300'}/>
                <button className={'bg-black text-white px-6 py-4 uppercase'}>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
