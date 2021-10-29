const WireSizeOption = () => {
  return <div>Wire Size Option</div>
}

export default WireSizeOption

enum WireSize {
  Awg14 = '#14',
  Awg12 = '#12',
  Awg10 = '#10',
  Awg0 = '1/0',
  Awg00 = '2/0',
  Awg000 = '3/0',
  Awg0000 = '4/0',
  Awg250 = '250mcm',
}

// Object.values(WireSize).map((s) => console.log(s))
// WireSize[enumKey as keyof typeof WireSize]
