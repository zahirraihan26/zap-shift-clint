import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Sendpercel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const serviceSenters = useLoaderData()
    const regionsDuplicate = serviceSenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })


    const districtByRegion = (region) => {
        const regionDistricts = serviceSenters.filter(c => c.region ===
            region)
        const districts = regionDistricts.map(d => d.district)
        return districts
    }



    const handelsendPercel = data => {
        console.log(data)
        const isDocument = data.percelType === 'document'
        const isSameDistrict = data.senderDistrict === data.receiverDistrict
        const parcelWeight = parseFloat(data.ParcelWeight)
        let cost = 0
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150
                const extraWeight = parcelWeight - 3
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40

                cost = minCharge + extraCharge

            }
        }

        console.log ('cost',cost)

        Swal.fire({
  title: "Agree with the cost",
  text: `You Will be charged ${cost} Taka!`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I agree"
}).then((result) => {
  if (result.isConfirmed) {

    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
    
  }
});

    }


    return (
        <div className="relative isolate min-h-screen">
            {/* Background Blob Effects */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center sm:text-left">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 tracking-tight">Send A Parcel</h2>
                    <p className="mt-3 text-lg text-gray-600">Fill in the details below to dispatch your parcel swiftly and securely.</p>
                </div>

                <div className="bg-white/50 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2rem] p-8 sm:p-12 relative overflow-hidden mb-10">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl"></div>
                    <form onSubmit={handleSubmit(handelsendPercel)} className='relative z-10 text-gray-800 space-y-10'>
                        
                        {/* Parcel Type Selection */}
                        <div className="bg-white/40 border border-white/50 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 text-gray-700">Parcel Type</h3>
                            <div className="flex flex-wrap gap-6">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="radio" {...register('ParcelType')} value="document" className="peer sr-only" defaultChecked />
                                        <div className="w-6 h-6 rounded-full border-2 border-purple-400 peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">Document</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="radio" {...register('ParcelType')} value="non-document" className="peer sr-only" />
                                        <div className="w-6 h-6 rounded-full border-2 border-purple-400 peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">Non-Document</span>
                                </label>
                            </div>
                        </div>

                        {/* Price Info: Name & Weight */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <fieldset className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Parcel Name</label>
                                <input type="text" {...register('ParcelName')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all shadow-inner" placeholder="E.g., Business Contract" />
                            </fieldset>

                            <fieldset className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Parcel Weight (kg)</label>
                                <input type="number" step="any" {...register('ParcelWeight')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all shadow-inner" placeholder="E.g., 2.5" />
                            </fieldset>
                        </div>

                        {/* Two Columns for Sender and Receiver */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-6 border-t border-gray-200/60'>
                            
                            {/* Sender Details */}
                            <fieldset className="space-y-6">
                                <div className="inline-flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                                    <h4 className="text-2xl font-bold text-gray-800">Sender details</h4>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Sender Name</label>
                                        <input type="text" {...register('SenderName')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="Your Name" />
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Sender Email</label>
                                        <input type="email" {...register('SenderEmail')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="your.email@example.com" />
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Sender Region</label>
                                        <select {...register('senderRegion')} defaultValue="Pick a region" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium appearance-none cursor-pointer">
                                            <option disabled={true}>Pick a region</option>
                                            {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Sender District</label>
                                        <select {...register('senderDistrict')} defaultValue="Pick a district" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium appearance-none cursor-pointer">
                                            <option disabled={true}>Pick a District</option>
                                            {senderRegion && districtByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)}
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Sender Address</label>
                                        <input type="text" {...register('SenderAddress')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="Detailed Address" />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Receiver Details */}
                            <fieldset className="space-y-6">
                                <div className="inline-flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">2</div>
                                    <h4 className="text-2xl font-bold text-gray-800">Receiver details</h4>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Receiver Name</label>
                                        <input type="text" {...register('RecevierName')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="Receiver's Name" />
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Receiver Email</label>
                                        <input type="email" {...register(' RecevierEmail')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="receiver@example.com" />
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Receiver Region</label>
                                        <select {...register('receiverRegion')} defaultValue="Pick a region" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium appearance-none cursor-pointer">
                                            <option disabled={true}>Pick a region</option>
                                            {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Receiver District</label>
                                        <select {...register('receiverDistrict')} defaultValue="Pick a district" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium appearance-none cursor-pointer">
                                            <option disabled={true}>Pick a District</option>
                                            {receiverRegion && districtByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-sm text-gray-600 font-medium">Receiver Address</label>
                                        <input type="text" {...register('RecevierAddress')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all font-medium" placeholder="Detailed Address" />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        
                        <div className="pt-8 flex justify-end items-center border-t border-gray-200/60">
                            <button type="submit" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all">
                                Send Parcel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sendpercel;