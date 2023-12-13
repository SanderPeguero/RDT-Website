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
    const [InforHero2, setInforHero2] = useState({
        title: '',
        description: '',
        image: null
    })
    const [ContactInfo, setContactInfo] = useState({
        Address: '',
        Phone: '',
        Email: ''
    })
    //HERO 1 FUNCTIONS
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

    //HERO 2 FUNCTIONS
    const SaveHero2 = async (title, descripcion) => {

        try {

            set(ref(db, 'Hero2/'), {
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

    const EditarHero2Title = async (newTitle) => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Title: newTitle
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero2Title = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Title: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const EditarHero2Description = async (newDescription) => {
        try {
            const heroRef = ref(db, 'Hero2');
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

    const DeleteHero2Description = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Descripcion: ""
            });


        } catch (error) {
            console.error(error);
        }
    }

    const UploadFileHero2 = async (fileImg) => {
        try {

            const storageRef = refImg(storage, 'Hero2Img/' + fileImg.name);
            await uploadBytes(storageRef, fileImg);
            const url = await getDownloadURL(storageRef)

            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Image: url
            });

        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    };

    const deleteImgHero2 = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
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

    // Funciones de contacto

    const SaveCotact = async (address, phone, email) => {
        try {

            set(ref(db, 'Contact/'), {
                Address: address,
                Phone: phone,
                Email: email
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const EditContactAddress = async (newAddress) => {
        try {
            const heroRef = ref(db, 'Contact/');
            update(heroRef, {
                Address: newAddress
            });

            console.log('Address actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar Address:', error);
        }
    }

    const EditContactPhone = async (newPhone) => {
        try {
            const heroRef = ref(db, 'Contact/');
            update(heroRef, {
                Phone: newPhone
            });

            console.log('Phone actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar Phone:', error);
        }
    }

    const EditContactEmail = async (newEmail) => {
        try {
            const heroRef = ref(db, 'Contact/');
            update(heroRef, {
                Email: newEmail
            });

            console.log('Email actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar Email:', error);
        }
    }




    const ShowInfoHero1 = async () => {
        try {
            const fetchData = ref(db, 'Hero1/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setInforHero1(prevText => ({ ...prevText, title: data.Title, description: data.Descripcion, image: data.Image }));
            })
        } catch (error) {

        }
    }

    const ShowInfoHero2 = async () => {
        try {
            const fetchData = ref(db, 'Hero2/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setInforHero2(prevText => ({ ...prevText, title: data.Title, description: data.Descripcion, image: data.Image }))
            })
        } catch (error) {

        }
    }
    const ShowInfoContact = async () => {
        try {
            const fetchData = ref(db, 'Contact/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setContactInfo(prevText => ({ ...prevText, Address: data.Address, Phone: data.Phone, Email: data.Email }))
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        console.log("Context")
        ShowInfoHero1()
        ShowInfoHero2()
        ShowInfoContact()
    }, [])



    console.log(InforHero1)
    console.log(InforHero2)


    return (
        <Context.Provider
            value={{
                InforHero1,
                SaveHero1,
                EditarHero1Title,
                EditarHero1Description,
                UploadFile,
                deleteImg,
                DeleteHero1Title,
                DeleteHero1Description,
                InforHero2,
                SaveHero2,
                EditarHero2Title,
                DeleteHero2Title,
                EditarHero2Description,
                DeleteHero2Description,
                UploadFileHero2,
                deleteImgHero2,
                ContactInfo,
                SaveCotact,
                EditContactAddress,
                EditContactPhone,
                EditContactEmail
            }}
        >
            {children}
        </Context.Provider>
    )
}