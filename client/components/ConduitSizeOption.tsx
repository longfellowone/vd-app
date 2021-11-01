const ConduitSizeOption = () => {
  return <div>Conduit Size Option</div>
}

export default ConduitSizeOption

enum ConduitSize {
  Id16 = '1/2"',
  Id21 = '3/4"',
  Id27 = '1"',
  Id35 = '1-1/4"',
  Id41 = '1-1/2"',
  Id53 = '2"',
  Id63 = '"2-1/2"',
  Id78 = '3"',
  Id91 = '3-1/2"',
  Id103 = '4"',
  Id116 = '4-1/2"',
  Id129 = '5"',
  Id155 = '6"',
  Id200 = '8"',
}

// Object.values(WireSize).map((s) => console.log(s))
// WireSize[enumKey as keyof typeof WireSize]
