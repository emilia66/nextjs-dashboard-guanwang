/*
 * @Description: 
 * @Author: emilia66 liru_jia@126.com
 * @Date: 2023-12-06 03:31:01
 * @LastEditTime: 2023-12-06 03:31:06
 * @LastEditors: emilia66 liru_jia@126.com
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}