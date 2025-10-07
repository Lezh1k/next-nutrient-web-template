import type NutrientViewer from "@nutrient-sdk/viewer";
import type { Instance } from "@nutrient-sdk/viewer";

declare global {
	interface Window {
		// Nutrient Web SDK will be available on window.NutrientViewer once loaded
		NutrientViewer?: typeof NutrientViewer;
		instance?: Instance;
	}
}

export {};
