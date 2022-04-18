window.addEventListener('DOMContentLoaded', async (event) => {

  console.log('DOM fully loaded and parsed');


  const res= await fetch('http://localhost:5000/api/user/users', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
                 },
      });

      let persones = await res.json();

        // Generate the table body
        let  tableBody = [];


        persones.users.forEach((item, index)=>{

            tableBody +=
            `
            <tr>

            <td class="px-5 py-5 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">${item.firstname}</p>
            </td>
            
            <td class="px-5 py-5 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">${item.lastname}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">${item.adress}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">${item.tel}</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">${item.score}</p>
            </td>
            </tr>
            ` 
        })
    
        // Fill the table content
        document.getElementById('tablebody').innerHTML = tableBody;
});