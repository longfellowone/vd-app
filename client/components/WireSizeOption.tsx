const WireSizeOption = () => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <label
        htmlFor="location"
        className="bg-green-300 text-right"
        // className="block text-sm font-medium text-gray-700"
      >
        Location
      </label>
      <select
        id="location"
        name="location"
        className=""
        // className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        // defaultValue={WireSize.Awg12}
      >
        {Object.keys(WireSize).map((size) => (
          <option key={size} value={size}>
            {WireSize[size as keyof typeof WireSize]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default WireSizeOption

enum WireSize {
  Awg14 = '#14',
  Awg12 = '#12',
  Awg10 = '#10',
  Awg8 = '#8',
  Awg6 = '#6',
  Awg4 = '#4',
  Awg3 = '#3',
  Awg2 = '#2',
  Awg1 = '#1',
  Awg0 = '1/0',
  Awg00 = '2/0',
  Awg000 = '3/0',
  Awg0000 = '4/0',
  Awg250 = '250mcm',
  Awg300 = '300mcm',
  Awg350 = '350mcm',
  Awg400 = '400mcm',
  Awg500 = '500mcm',
  Awg600 = '600mcm',
  Awg750 = '750mcm',
  Awg1000 = '1000mcm',
}
