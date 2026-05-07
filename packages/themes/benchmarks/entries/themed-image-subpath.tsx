import React from "react";
import { ThemedImage } from "@wrksz/themes/client/themed-image";

export function ThemedImageSubpathFixture() {
	return (
		<ThemedImage
			src={{
				light: "/logo-light.svg",
				dark: "/logo-dark.svg",
			}}
			alt="Logo"
			width={120}
			height={40}
		/>
	);
}
