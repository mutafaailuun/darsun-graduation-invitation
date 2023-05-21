"use client";
import Front from "./components/front";
import Date from "./dates/page";
import Button from "./components/Button";
import { Link, Element } from "react-scroll";
import { useState } from "react";
export default function Home() {
	const [currentPage, setCurrentPage] = useState("Front");

	return <Front />;
}
