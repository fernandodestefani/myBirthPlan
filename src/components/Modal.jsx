export default function Modal() {
  return (
    <div className="modal__container">
      <h2 className="modal__title">Placenta Art - "Tree of Life"</h2>
      <div className="modal__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2SwFasZEvWI?si=FIDFuPGJPTRW9Jbu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
        ></iframe>
      </div>
      <div className="modal__text">
        <p className="modal__paragraph">
          Coloring the placenta, also known as placenta printing or Tree of Life
          art, is a popular and humanized way to create an artistic and
          emotional keepsake of childbirth.
        </p>
        <p className="modal__paragraph">
          In Brazil, the practice is allowed carried out in many hospitals,
          including those in the public system (SUS).
        </p>
        <p className="modal__paragraph">
          The print is made by gently pressing the fetal side of the placenta
          onto paper, using its natural blood or colored pigments (like gouache
          or food dye). The result resembles a tree — symbolizing life, growth,
          and the connection between mother and child.
        </p>
      </div>
    </div>
  );
}
