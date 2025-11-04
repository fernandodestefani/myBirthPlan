export default function PlacentaContent() {
  return (
    <>
      <div className="modal__video">
        <iframe
          src="https://www.youtube.com/embed/2SwFasZEvWI"
          title="Placenta Art Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="modal__text">
        <p>
          Coloring the placenta, also known as placenta printing or Tree of Life
          art, is a popular and humanized way to create an artistic and
          emotional keepsake of childbirth.
        </p>
        <p>
          In Brazil, the practice is allowed carried out in many hospitals,
          including those in the public system (SUS).
        </p>
        <p>
          The print is made by gently pressing the fetal side of the placenta
          onto paper, using its natural blood or colored pigments (like gouache
          or food dye). The result resembles a tree — symbolizing life, growth,
          and the connection between mother and child.
        </p>
      </div>
    </>
  );
}
