import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
return (
    <>
        <div className='flex h-screen overflow-hidden'>
            <Sidebar/>
            <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <Header/>
                <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                    <main className="p-4">{children}</main>
                </div>
            </div>
        </div>
    </>
);
};

export default Layout;
