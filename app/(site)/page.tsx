import PagePadding from "@/components/PagePadding"
import Category from "./components/Category"

export default async function Home() {
    return (
        <PagePadding>
        <div className="min-h-[600px<]">
            <div className="mt-9"></div>
                <Category/>
                <div className="mt-12">
                    {/* carousel */}
                </div>
            </div>
        </PagePadding>
    )
}
