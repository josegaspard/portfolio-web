import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsappButton from "@/components/WhatsappButton/WhatsappButton";
import HreflangTags from "@/components/HreflangTags";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HreflangTags />
            <div className="bg-blob blob-indigo"></div>
            <div className="bg-blob blob-purple"></div>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <WhatsappButton />
        </>
    );
}
