import { createContext, useContext, useEffect, useState } from "react"
import { db, storage } from "./firebase/firebase"
import { set, ref, onValue, get, update } from "firebase/database"
import { ref as refImg, uploadBytes, getDownloadURL } from 'firebase/storage'


const Context = createContext()

export const useContextRDT = () => {
    const context = useContext(Context)
    if (!context) throw new Error('There is no Auth provider')
    return context
}

export function ProviderContext({ children }) {
    const [InforHero1, setInforHero1] = useState({
        title: '',
        description: '',
        image: null
    });
    const [imgUrl, setImgUrl] = useState(null)

    //Funcion para guardar los datos, No actualizar
    const SaveHero1 = async (title, descripcion) => {
        console.log("Backend")
        let id = 0
        id++
        try {

            set(ref(db, 'Hero1/'), {
                Title: title,
                Descripcion: descripcion,
                Image: ""
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const EditarHero1Title = async (newTitle) => {
        try {
            const heroRef = ref(db, 'Hero1');
            console.log("Editar title")
            console.log(newTitle)
            update(heroRef, {
                Title: newTitle
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero1Title = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Title: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const EditarHero1Description = async (newDescription) => {
        try {
            const heroRef = ref(db, 'Hero1');
            console.log("Editar Description")
            console.log(newDescription)
            update(heroRef, {
                Descripcion: newDescription
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero1Description = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Descripcion: ""
            });


        } catch (error) {
            console.error(error);
        }
    }

    const UploadFile = async (fileImg) => {
        try {

            const storageRef = refImg(storage, 'HeroImg/' + fileImg.name);
            await uploadBytes(storageRef, fileImg);
            const url = await getDownloadURL(storageRef)

            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Image: url
            });

        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    };

    const deleteImg = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            const snapshot = await get(heroRef);
            const data = snapshot.val();
            const imageUrl = data?.Image;

            if (imageUrl) {
              
                await update(heroRef, {
                    Image: null 
                });

            } else {
                console.log('No se encontró ninguna URL de imagen en la base de datos');
            }
        } catch (error) {
            console.error('Error al eliminar la referencia de la imagen:', error);
            throw error;
        }
    }






    const ShowInfo = async () => {
        try {
            const fetchData = ref(db, 'Hero1/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setInforHero1(prevText => ({ ...prevText, title: data.Title, description: data.Descripcion, image: data.Image }));
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        console.log("Context")
        ShowInfo()
    }, [])



    console.log(InforHero1)


    return (
        <Context.Provider
            value={{ 
                SaveHero1, 
                InforHero1, 
                EditarHero1Title, 
                EditarHero1Description, 
                UploadFile, 
                imgUrl,
                deleteImg,
                DeleteHero1Title,
                DeleteHero1Description

            
            }}
        >
            {children}
        </Context.Provider>
    )
}