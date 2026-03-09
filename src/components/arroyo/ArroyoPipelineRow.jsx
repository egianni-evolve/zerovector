function ArroyoPipelineRow({ title, before, after, beforeLabel = 'BEFORE', afterLabel = 'ZERO-VECTOR' }) {
  return (
    <div className="arr-pipeline-row">
      <div className="arr-pipeline-title">{title}</div>
      <div className="arr-pipeline-grid">
        <div className="arr-pipeline-before">
          <div className="arr-pipeline-label arr-pipeline-label--before">{beforeLabel}</div>
          <div className="arr-pipeline-text arr-pipeline-text--before">{before}</div>
        </div>
        <div className="arr-pipeline-after">
          <div className="arr-pipeline-label arr-pipeline-label--after">{afterLabel}</div>
          <div className="arr-pipeline-text">{after}</div>
        </div>
      </div>
    </div>
  );
}

export default ArroyoPipelineRow;
