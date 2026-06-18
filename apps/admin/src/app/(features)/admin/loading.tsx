const AdminLoading = () => {
   return (
      <div className="grid grid-cols-12 lg:gap-3 xl:gap-5 p-5">
         <aside className="col-span-12 rounded-xl border-2 border-indigo-400 shadow-xl lg:col-span-3">
            <div className="skeleton w-full h-full"></div>
         </aside>
         <main className="col-span-12 mt-5 rounded-xl border-2 border-indigo-400 bg-base-300 shadow-xl lg:col-span-9 lg:mt-0">
            <div className="skeleton w-full h-full"></div>
         </main>
      </div>
   );
};

export default AdminLoading;
