import Link from "next/link"


export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenu sur code.io </h1>
      <span> Le blog communautaire... de developpement web </span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title"> Liser les article</h5>
              <h6 className="card-subtitle mb-2 text-muted">maximiser votre culture web</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos!</p>
              <Link href="/blog">Visiter le blog</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title"> Faite un tour à liste des membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">Rencontrer des dev</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos!</p>
              <Link href="/utilisateurs">Découvrer la listes des membres</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
