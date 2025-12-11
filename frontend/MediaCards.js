import { useRef, useEffect } from 'react';

export default function MediaCards() {
  const mediaRef = useRef(null);
  const mediaCards = [
    { title: "Company A", image: "/image copy 3.png" },
    { title: "Company B", image: "/image copy.png" },
    { title: "Educator C", image: "/image3.png" },
    { title: "Intern D", image: "/image4.png" },
    { title: "Intern E", image: "/image5.png" },
    { title: "Intern G", image: "/image7.png" },
    { title: "Intern H", image: "/image8.png" },
    { title: "Intern I", image: "/image9.png" },
    { title: "Intern J", image: "/image10.png" },
    { title: "Intern K", image: "/image11.png" },
     { title: "Intern L", image: "/image12.png" },

  ];

  useEffect(() => {
    const container = mediaRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
    const mouseLeaveHandler = () => { isDown = false; container.classList.remove('active'); };
    const mouseUpHandler = () => { isDown = false; container.classList.remove('active'); };
    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('mouseleave', mouseLeaveHandler);
    container.addEventListener('mouseup', mouseUpHandler);
    container.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      container.removeEventListener('mousedown', mouseDownHandler);
      container.removeEventListener('mouseleave', mouseLeaveHandler);
      container.removeEventListener('mouseup', mouseUpHandler);
      container.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <section style={{ padding: '180px 100px', textAlign: 'center', backgroundColor: '#186a75ff' }}>
      <h2 style={{ fontSize: '2.9rem', color: '#e6eff1ff', marginBottom: '30px' }}>Trusted by Educators and Employers Worldwide</h2>
      <div ref={mediaRef} style={{ overflow: 'hidden', display: 'flex', gap: '60px', padding: '20px 0', cursor: 'grab' }}>
        {mediaCards.map((card, index) => (
          <div key={index} style={{ minWidth: '400px', minHeight: '300px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
            <img src={card.image} alt={card.title} style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
