


function Category({category, children}){

    return (
        <section className="flex flex-col items-center justify-center w-full first:mt-[20px]">
            <h2                                         className="text-red-600 text-2xl font-bold mt-4 hover:text-slate-200 transition d
            "
            translate="no"
            >                                    {category}                                        </h2>
            <div className='flex flex-row sm:flex-row items-center justify-start space-x-4 p-2 w-full mr-4 overflow-x-auto'>
                {children}
            </div>
        </section>
    )
}


export default Category;
