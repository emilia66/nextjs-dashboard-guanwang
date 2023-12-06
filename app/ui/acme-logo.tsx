/*
 * @Description: 
 * @Author: emilia66 liru_jia@126.com
 * @Date: 2023-11-29 20:44:04
 * @LastEditTime: 2023-12-06 03:01:24
 * @LastEditors: emilia66 liru_jia@126.com
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
