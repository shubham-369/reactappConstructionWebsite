import React from 'react'
import '../css/about.css'

const Staff = () => {

    
    const staff= [
        {imgLink: 'https://img.freepik.com/free-photo/young-builder-man-wearing-construction-uniform-safety-helmet-looks-angry-holds-hammer_141793-33672.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=aisg', name: 'Mike Witney', position: 'Senior Engineer'},

        {imgLink: 'https://img.freepik.com/free-photo/builder-man-construction-vest-safety-helmet-looking-aside-confused-with-arms-raised_141793-108787.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais', name: 'Mike Witney', position: 'Senior Engineer'},

        {imgLink: 'https://img.freepik.com/free-photo/smiling-young-builder-man-uniform-with-safety-helmet-standing-with-crossed-arms-isolated-orange-wall-with-copy-space_141793-119957.jpg', name: 'Mike Witney', position: 'Senior Engineer'},

        {imgLink: 'https://img.freepik.com/free-photo/smiling-young-builder-girl-with-safety-glasses-shows-victory-hand-gesture-isolated-orange-background-with-copy-space_141793-34572.jpg', name: 'Mike Witney', position: 'Senior Engineer'},
    ]

  return (
    <>
         <div className="row staff-row">
            <h5><span>Team & Staff</span></h5>
            <h1>Qualified Engineers</h1>
            {
                staff.map((element, index) => {
                    const {imgLink, name, position} = element;
                    return(
                        <div className="col-md-3 col-12" key={index}>
                            <div className="card">
                                <img className="card-img-top" src={imgLink} alt="Card image cap" />
                                <div className="card-body">
                                    <h4>{name}</h4>
                                    <h6>{position}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </>
  )
}

export default Staff
