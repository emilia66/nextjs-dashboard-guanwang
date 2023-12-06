/*
 * @Description: 
 * @Author: emilia66 liru_jia@126.com
 * @Date: 2023-11-29 20:44:04
 * @LastEditTime: 2023-12-06 03:41:58
 * @LastEditors: emilia66 liru_jia@126.com
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>RootLayout{children}</body>
    </html>
  );
}
