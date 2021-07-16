import React, { Component, useState } from "react";
import "./Form.css";
import { withRouter } from "react-router-dom";
// import api from '../../../../../../services/useApi';
import api from "../../../../../../services/api";

// class PetCad extends Component {
//   state = {
//     name: "",
//     age: "",
//     cor: "",
//     species: "",
//     type_pet: "",
//     owner: "",
//     address: "",
//     city: "",
//     district: "",
//     fone: "",
//     last_visit: "",
//     obs: "",
//   };

//   handleClean = () => {
//     this.setState({
//       name: "",
//       age: "",
//       cor: "",
//       species: "",
//       type_pet: "",
//       owner: "",
//       address: "",
//       city: "",
//       district: "",
//       fone: "",
//       last_visit: "",
//       obs: "",
//     });
//     this.setState({ error: "" });
//   };

//   handlePet = async (e) => {
//     e.preventDefault();
//     const {
//       name,
//       age,
//       cor,
//       species,
//       type_pet,
//       owner,
//       address,
//       city,
//       district,
//       fone,
//       last_visit,
//       obs,
//     } = this.state;
//     if (
//       !name ||
//       !age ||
//       !cor ||
//       !species ||
//       !type_pet ||
//       !owner ||
//       !address ||
//       !city ||
//       !district ||
//       !fone ||
//       !last_visit ||
//       !obs
//     ) {
//       this.setState({ error: "Preencha todos os dados para se cadastrar" });
//     } else {
//       try {
//         alert('criado')
//         await api.post("/pet", {
//           name,
//           age,
//           cor,
//           species,
//           typePet: type_pet,
//           owner,
//           address,
//           city,
//           district,
//           fone,
//           // last_visit,
//           obs,
//         });
//         this.props.history.push("/signin");
//       } catch (err) {
//         console.log(err);
//         this.setState({ error: "Preencha todos os dados!" });
//       }
//     }
//   };

//   render() {
//     return (
//       <>
//         <container>
//           <form
//             style={{ padding: 20 }}
//             onSubmit={this.handlePet}
//             onReset={this.handleClean}
//           >
//             <div className="dadospet">
//               {this.state.error && <p>{this.state.error}</p>}
//               <span className="title">Dados pet:</span>
//               <input
//                 required
//                 className="input"
//                 type="text"
//                 placeholder="Nome de Pet"
//                 onChange={(e) => this.setState({ name: e.target.value })}
//               />

//               <div className="row">
//                 <input
//                   min={0}
//                   max={100}
//                   required
//                   className="input"
//                   type="number"
//                   placeholder="Idade"
//                   onChange={(e) => this.setState({ age: e.target.value })}
//                 />
//                 <input
//                   required
//                   className="input"
//                   type="text"
//                   placeholder="Cor"
//                   onChange={(e) => this.setState({ cor: e.target.value })}
//                 />
//               </div>

//               <div className="row">
//                 <input
//                   required
//                   className="input"
//                   type="text"
//                   placeholder="Raça"
//                   onChange={(e) => this.setState({ species: e.target.value })}
//                 />
//                 <input
//                   required
//                   className="input"
//                   type="text"
//                   placeholder="Tipo"
//                   onChange={(e) => this.setState({ type_pet: e.target.value })}
//                 />
//               </div>
//             </div>
//             <div className="donoend">
//               <span className="title">Dados dono:</span>
//               <div className="row">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Endereço"
//                   onChange={(e) => this.setState({ address: e.target.value })}
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Cidade"
//                   onChange={(e) => this.setState({ city: e.target.value })}
//                 />
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Bairro"
//                   onChange={(e) => this.setState({ district: e.target.value })}
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   className="input"
//                   type="fone"
//                   placeholder="Telefone"
//                   onChange={(e) => this.setState({ fone: e.target.value })}
//                 />
//               </div>

//               <div className="row">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Ultima Visita"
//                   onChange={(e) =>
//                     this.setState({ last_visit: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="row">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Observações"
//                   onChange={(e) => this.setState({ obs: e.target.value })}
//                 />
//               </div>
//             </div>
//             <div className="containerBotoes">
//               <button className="salva " type="reset">
//                 limpar
//               </button>
//               <button className="salva" type="submit">
//                 salvar
//               </button>
//             </div>
//           </form>
//         </container>
//       </>
//     );
//   }
// }

const PetCad = () => {
  const [name, setName] = useState("name");
  const [age, setAge] = useState("25");
  const [cor, setCor] = useState("cor");
  const [species, setSpecies] = useState("species");
  const [typePet, setTypePet] = useState("typePet");
  const [owner, setOwner] = useState("owner");
  const [address, setAddress] = useState("address");
  const [city, setCity] = useState("city");
  const [district, setDistrict] = useState("district");
  const [fone, setFone] = useState("fone");
  const [lastVisit, setLastVisit] = useState("lastVisit");
  const [obs, setObs] = useState("obs");

  const [error, setError] = useState("");

  const handleClean = () => {
    setName("");
    setAge("");
    setCor("");
    setSpecies("");
    setTypePet("");
    setOwner("");
    setAddress("");
    setCity("");
    setDistrict("");
    setFone("");
    setLastVisit("");
    setObs("");
    setError("");
  };

  const handlePet = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !age ||
      !cor ||
      !species ||
      !typePet ||
      !owner ||
      !address ||
      !city ||
      !district ||
      !fone ||
      !lastVisit ||
      !obs
    ) {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      try {
        await api.post("/api/v1/pet", {
          name,
          age,
          cor,
          species,
          typePet,
          owner,
          address,
          city,
          district,
          fone,
          obs,
        });

        handleClean();
        alert("Pet salvo com sucesso")
        // window.history.push("/signin");
      } catch (err) {
        console.log(err);
        setError("Preencha todos os dados!");
      }
    }
  };

  return (
    <>
      <container>
        <form
          style={{ padding: 20 }}
          onSubmit={handlePet}
          onReset={handleClean}
        >
          <div className="dadospet">
            {error && <p>{error}</p>}
            <span className="title">Dados pet:</span>
            <input
              defaultValue={name}
              required
              className="input"
              type="text"
              placeholder="Nome de Pet"
              onChange={(e) => setName(e.target.value)}
            />

            <div className="row">
              <input
                defaultValue={age}
                min={0}
                max={100}
                required
                className="input"
                type="number"
                placeholder="Idade"
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                defaultValue={cor}
                required
                className="input"
                type="text"
                placeholder="Cor"
                onChange={(e) => setCor(e.target.value)}
              />
            </div>

            <div className="row">
              <input
                defaultValue={species}
                required
                className="input"
                type="text"
                placeholder="Raça"
                onChange={(e) => setSpecies(e.target.value)}
              />
              <input
                defaultValue={typePet}
                required
                className="input"
                type="text"
                placeholder="Tipo"
                onChange={(e) => setTypePet(e.target.value)}
              />
            </div>
          </div>
          <div className="donoend">
            <span className="title">Dados dono:</span>
            <div className="row">
              <input
                defaultValue={address}
                className="input"
                type="text"
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                defaultValue={city}
                className="input"
                type="text"
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                defaultValue={district}
                className="input"
                type="text"
                placeholder="Bairro"
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                defaultValue={fone}
                className="input"
                type="fone"
                placeholder="Telefone"
                onChange={(e) => setFone(e.target.value)}
              />
            </div>

            <div className="row">
              <input
                defaultValue={lastVisit}
                className="input"
                type="text"
                placeholder="Ultima Visita"
                onChange={(e) => setLastVisit(e.target.value)}
              />
            </div>

            <div className="row">
              <input
                defaultValue={obs}
                className="input"
                type="text"
                placeholder="Observações"
                onChange={(e) => setObs(e.target.value)}
              />
            </div>
          </div>
          <div className="containerBotoes">
            <button className="salva " type="reset">
              limpar
            </button>
            <button className="salva" type="submit">
              salvar
            </button>
          </div>
        </form>
      </container>
    </>
  );
};

export default withRouter(PetCad);
