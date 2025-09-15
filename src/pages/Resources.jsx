function Resources() {
    const resources = [
      { title: "Stress Relief Video", link: "https://www.youtube.com/embed/ZToicYcHIOU" },
      { title: "Sleep Relaxation Audio", link: "https://www.youtube.com/embed/aEqlQvczMJQ" },
    ];
  
    return (
      <div className="grid gap-4 max-w-3xl mx-auto">
        {resources.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold">{r.title}</h3>
            <iframe className="w-full h-48 mt-2 rounded-lg" src={r.link} title={r.title}></iframe>
          </div>
        ))}
      </div>
    );
  }
  
  export default Resources;
  