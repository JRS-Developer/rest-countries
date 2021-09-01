import { CountryI } from "../interfaces";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../helpers";

const CountryCard = (props: CountryI) => {

    return (
        <li className="rounded bg-white shadow dark:bg-dark-blue hover:transition-all transition-all hover:shadow-md overflow-hidden">
            <Link to={`/details/${props.alpha3Code}`}>
                <img
                    src={props.flag}
                    alt={props.name}
                    className="w-full h-36 object-cover"
                />
            </Link>
            <div className="p-4">
                <h3 className="font-extrabold">{props.name}</h3>
                <p>
                    <b>Population:</b>{" "}
                    {numberWithCommas(Number(props.population))}
                </p>
                <p>
                    <b>Region:</b> {props.region}
                </p>
                <p>
                    <b>Capital:</b> {props.capital}
                </p>
            </div>
        </li>
    );
};

export default CountryCard;
