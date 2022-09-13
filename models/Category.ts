import { Data } from "./Data";

export interface Category extends Data {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    string: NamedCurve;
} 