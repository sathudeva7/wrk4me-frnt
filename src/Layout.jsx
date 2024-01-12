
import Header from "./Header";
import FilterSidebar from "./components/FilterSidebar";


const Layout = ({children}) => {
  return (
      <div>
          <div className="fixed w-full z-10">
          <Header />
          </div>
          <div className="lg:pl-12">
            <main className="lg:pl-[250px]">
              <div className="px-5 py-1 sm:px-6 lg:pl-6 lg:pr-5 lg:py-3">
                {children}
              </div>
            </main>
          </div>
          <aside className="fixed top-20 overflow-y-hidden lg:max-w-[400px] ml-4">
            <FilterSidebar />
          </aside>
      </div>
  );
};

export default Layout;
