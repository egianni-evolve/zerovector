function ArroyoPriceCard({ plan, price, desc, features, featured, note, bookingUrl }) {
  return (
    <div className={`arr-price-card ${featured ? 'arr-price-card--featured' : ''}`}>
      {featured && <div className="arr-price-gradient" />}
      <div className="arr-price-header">
        <div className="arr-price-plan">{plan}</div>
        <div className="arr-price-amount">{price}</div>
        <div className="arr-price-desc">{desc}</div>
        {note && <div className="arr-price-note">{note}</div>}
      </div>
      <div className="arr-price-features">
        {features.map((f, i) => (
          <div key={i} className="arr-price-feature">
            <span className="arr-price-check">{'\u2713'}</span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <a
        href={featured ? bookingUrl : '#pricing'}
        target={featured ? '_blank' : undefined}
        rel={featured ? 'noopener noreferrer' : undefined}
        className={`arr-price-btn ${featured ? 'arr-price-btn--primary' : ''}`}
      >
        {featured ? 'GET STARTED \u2192' : 'LEARN MORE'}
      </a>
    </div>
  );
}

export default ArroyoPriceCard;
