export default function EpisiotomiaContent() {
  return (
    <>
      <div className="modal__video">
        <iframe
          src="https://www.youtube.com/embed/1MZFQCYRYms?si=AfpocomE0qASscQe"
          title="Episiotomy Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="modal__text">
        <p>
          Episiotomy is a surgical cut made at the opening of the vagina during childbirth,
          intended to aid a difficult delivery and prevent rupture of tissues.
        </p>
        <p>
          Current guidelines recommend episiotomy only when necessary, as routine use is not advised.
        </p>
        <p>
          Discuss your preferences with your healthcare team to ensure your birth plan reflects your choices.
        </p>
      </div>
    </>
  );
}
