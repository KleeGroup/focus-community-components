# Menu-List

## Description

Composant qui permet de réaliser des menus arborescents. 
Si la props list reçoit un array le menu affichera tous les éléments 'à plat'. Si c'est un objet ce sera un menu arborescent.


## PropTypes

<table>
	<thead>
        <tr>
            <th>Attribut</th>
            <th>Type</th>
            <th>Valeur par default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>list</code></td>
            <td><i>array</i>, <i>object</i></td>
            <td></td>
            <td>Les données à afficher dans le menu.</td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td><i>string</i></td>
            <td></td>
            <td>Le titre du menu</td>
        </tr>
        <tr>
            <td><code>keyKey</code></td>
            <td><i>string</i></td>
            <td><code>'id'</code></td>
            <td>Nom de l'attribut qui permet de trouver un identifiant unique (utiliser pour créer la key de react)</td>
        </tr>
        <tr>
            <td><code>rootLink</code></td>
            <td><i>string</i></td>
            <td></td>
            <td>La racine de l'URL à laquelle on souhaite accéder</td>
        </tr>
        <tr>
            <td><code>linkKey</code></td>
            <td><i>string</i></td>
            <td></td>
            <td>Nom de l'attribut qui permet de compléter l'URL et de les différencier</td>
        </tr>
        <tr>
            <td><code>labelKey</code></td>
            <td><i>string</i></td>
            <td><code>'label'</code></td>
            <td>Nom de l'attribut correspondant au libellé dans la liste. </td>
        </tr>
        <tr>
            <td><code>viewKey</code></td>
            <td><i>string</i></td>
            <td></td>
            <td>Nom de l'attribut correspondant au code de la page. (en pratique on utilise souvent le même attribut que keyKey) </td>
        </tr>
        <tr>
            <td><code>viewSelected</code></td>
            <td><i>string</i></td>
            <td></td>
            <td>Le code de la vue qui est sélectionner. Il sera comparé avec les valeurs de viewKey pour mettre en évidence la page sélectionnée </td>
        </tr>
        <tr>
            <td><code>childrenKey</code></td>
            <td><i>string</i></td>
            <td><code>'children'</code></td>
            <td>Nom de l'attribut correspondant aux enfants d'un objet. </td>
        </tr>
   </tbody>
</table>

