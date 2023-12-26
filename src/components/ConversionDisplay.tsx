export default function ConversionDisplay({ calculatedConversion }: { calculatedConversion: number }) {
  return (
    <div className="row">
      <span>Equals: </span>
      <span className="output">{Number(calculatedConversion.toFixed(3))}</span>
    </div>
  );
}
