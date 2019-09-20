 
    setName(event.target.value);
  }


  return (
    <section className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        }}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
