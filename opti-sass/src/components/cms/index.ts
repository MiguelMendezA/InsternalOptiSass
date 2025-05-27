// Empty dictionary to prevent build errors
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react/rsc";

import PageFactory from "./page";
//import ArticlePagePage from "./page/ArticlePage";

prefixDictionaryEntries(PageFactory, "Page");

export const cmsComponentDictionary : ComponentTypeDictionary = [
    ...PageFactory
    /* {
        type: "Page/ArticlePage",
        component: ArticlePagePage 
    }*/
]

export default cmsComponentDictionary

/**
 * Prefixes the `type` property of each entry in a `ComponentTypeDictionary` with the specified prefix.
 *
 * If the `type` property is a string, it concatenates the prefix and the type with a "/" separator.
 * If the `type` property is an array, it prepends the prefix to the array.
 *
 * @param list - The dictionary of component types to update.
 * @param prefix - The prefix to add to each component's type.
 * @returns The updated `ComponentTypeDictionary` with prefixed type entries.
 */
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}