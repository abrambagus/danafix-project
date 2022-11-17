import { useSelector } from "react-redux";
import { phoneSelector } from "../../slices/phoneSlices";

   const mockData = [
    {
    mock: 'mock'
},

{
    mock: 'mock'
},

{
    mock: 'mock'
},


]

export default function History() {
    const phoneState = useSelector(phoneSelector);
     return (
       <div className="h-screen w-full">
          <header className='w-full border-b p-2 border-gray-200'>
            <p>phone number: {phoneState.phoneNumber}</p>
         </header>
         <div>
            
         </div>
        <table className="shadow-lg bg-white mt-8">
            <tr>
                <th className="bg-blue-100 border text-left px-8 py-4">Tanggal pengajuan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">ID karyawan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Nama Karyawan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Jabatan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Tgl Mulai Bekerja</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Gaji</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Permintaan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Biaya Layanan</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Pembayaran</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Status</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Status Data</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Manager HR</th>
            </tr>
            {mockData.map((mock, key ) => (
                <tr key={key}>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
                <td className="border px-8 py-4">{mock.mock}</td>
            </tr>
            ))}
            </table>
       </div>
       
     )
   }